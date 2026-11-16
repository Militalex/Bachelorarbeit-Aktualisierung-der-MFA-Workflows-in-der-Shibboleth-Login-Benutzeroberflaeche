library(tidyverse)
library(dplyr)
library(readxl)
library(ggplot2)
library(pwr)
library(DescTools)

df <- read_excel("../../../13 Gesammelte Studiendaten/04 Erhobene Daten/Studiendaten.xlsx", sheet = "Study Data")
df <- df |> select(-Clock)
colnames(df) <- c("Number", "Date", "Condition", "TID", "Lang", "Gender", "Age", "Role",
                  "LoginFreq", "ExpLevel", "mfaKnown", "mfaDailyLife", "mfaForUniID", 
                  "RecentlyUsed", "LoginPageKnown", "FamWithDontRememberMe", "ImportantAspects",
                  "hrzSupportKind", "ownSupportKind", "Prefferred", "hrzSUS", "ownSUS",
                  "hrzLikeToFrequentUse", "ownLikeToFrequentUse", "hrzEasyToUse", "ownEasyToUse",
                  "hrzNeedAssistance", "ownNeedAsistance", "hrzWellIntegrated", "ownWellIntegrated",
                  "hrzInconsistencies", "ownInconsistencies", "hrzUmständlich", "ownUmständlich",
                  "hrzUnverständZuVerständ", "ownUnverständZuVerständ", "hrzLotToLearn", "ownLotToLearn",
                  "hrzEasyToLeanForOthers", "ownEasyToLearnForOthers", "hrzLeichtZuLernenZuSchwerZuLernen", 
                  "ownLeichtZuLernenZuSchwerZuLernen", "hrzUnberechenZuBerechen", "ownUnberechenZuBerechen",
                  "hrzGutZuSchlecht", "ownGutZuSchlecht", "hrzUnnKomplex", "ownUnnKomplex", 
                  "hrzKomplZuEinf", "ownKomplZuEinf", "hrzFeltSecure", "ownFeltSecure",
                  "hrzSicherZuUnsicher", "ownSicherZuUnsicher", "hrzIneffiZuEffi", "ownIneffiZuEffi", 
                  "hrzÜbersichtZuVerwirrend", "ownÜbersichtZuVerwirrend", "hrzHerkömmZuNeu", "ownHerkömmZuNeu")

df <- head(df, 10)
df <- mutate(df, Number = as.numeric(Number),
             Condition = as.factor(Condition),
             Lang = as.factor(Lang),
             Gender = as.factor(Gender),
             Role = as.factor(Role),
             LoginFreq = as.factor(LoginFreq),
             ExpLevel = factor(ExpLevel, levels = 1:5),
             mfaKnown = as.factor(mfaKnown),
             mfaDailyLife = as.factor(mfaDailyLife),
             mfaForUniID = as.factor(mfaForUniID),
             LoginPageKnown = as.factor(LoginPageKnown),
             hrzSupportKind = as.factor(hrzSupportKind),
             ownSupportKind = as.factor(ownSupportKind),
             Prefferred = as.factor(Prefferred))

df_ta <- df |> filter(Number > 1)

# age
summary(df$Age)

# ExpLevel
summary(as.numeric(df$ExpLevel))
ggplot(data = df, mapping=aes(x = ExpLevel)) + 
  geom_bar() +
  scale_x_discrete(limits = as.character(1:5)) +
  labs(title = "IT-Erfahrungs Level Verteilung", x = "IT-Erfahrungs Level", y = "Anzahl") +
  theme(plot.title = element_text(hjust = 0.5))

# Familiar With Login Page
summary(as.numeric(df$FamWithDontRememberMe))
ggplot(data = df, mapping=aes(x = FamWithDontRememberMe)) + 
  geom_bar() +
  scale_x_discrete(limits = as.character(1:5)) +
  labs(title = "\"Anmeldung nicht speichern\" Verteilung", x = "\"Anmeldung nicht speichern\" Vertrautheit", y = "Anzahl") +
  theme(plot.title = element_text(hjust = 0.5))  

# SUS
df_SUS <- data.frame(
  Teilnehmer = rep(df$Number, times = 2),
  Webseite = c(rep("HRZ Design", times = 10), rep("Angepasstes Design", times = 10)),
  SUS = c(df$hrzSUS, df$ownSUS)
)
Ps = c("P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10")

ggplot(df_SUS, aes(x = Teilnehmer, y = SUS, fill = Webseite)) + 
  geom_bar(stat = "identity", position = "dodge", color = "black") +
  scale_x_discrete(limits = Ps) + scale_y_discrete(limits = seq(0, 100, 10)) +
  labs(title = "Vergleich der SUS-Werte pro Teilnehmer", x = "Teilnehmer", y = "SUS Score") +
  theme(plot.title = element_text(hjust = 0.5))

# Hypothesentest Methode
hypo_test <- function(d1, d2, alt = "greater"){
  differenzen <- d1 - d2
  shapiro_result <- shapiro.test(differenzen)
  print("Shapiro Test:")
  print(shapiro_result)
  
  print("Q-Q-Plot erstellt...")
  PlotQQ(differenzen, main = "", xlab = "Theoretische Quantile", ylab = "Stichprobenquantile")
  
  mittelwert_diff <- mean(differenzen)
  sd_diff <- sd(differenzen)
  cohen_d <- mittelwert_diff / sd_diff
  
  pwr_result <- pwr.t.test(d = cohen_d, 
                           power = 0.80,
                           sig.level = 0.05,           # Signifikanzniveau (typisch 0.05)
                           type = "paired",            # Gepaarte Daten
                           alternative = alt)
  print("Benötigtes n")
  print(pwr_result)
  
  pwr_result <- pwr.t.test(d = cohen_d, 
                           n = length(differenzen),
                           sig.level = 0.05,           # Signifikanzniveau (typisch 0.05)
                           type = "paired",            # Gepaarte Daten
                           alternative = alt)
  
  print("Welche Power?")
  print(pwr_result)
  
  t_test_result <- t.test(d1, d2, paired = TRUE, alternative = alt)
  
  print("t-Test Testergebnisse:")
  print(t_test_result)
  
  w_test_result <- wilcox.test(d1, d2, paired = TRUE, alternative = alt)
  
  print("Wilcox Testergebnisse:")
  print(w_test_result)
  
  print("Mean")
  print(mean(differenzen))
  
  print("Standard Derivation")
  print(sqrt(var(differenzen)))
  
  return(data.frame(tTest = t_test_result$p.value, wilcoxTest = w_test_result$p.value))
}

# SUS Hypothesentest
hypo_test(df$ownSUS, df$hrzSUS, alt = "two.sided")

# SUS Verteilungen
df_SUS <- data.frame(
  x = rep(seq(0, 100, length=200), 2),  # Gemeinsame x-Werte
  y = c(dnorm(seq(0, 100, length=200), mean=mean(df$ownSUS), sd=sqrt(var(df$ownSUS))),
        dnorm(seq(0, 100, length=200), mean=mean(df$hrzSUS), sd=sqrt(var(df$hrzSUS)))),
  Gruppe = rep(c("HRZ", "Prototyp"), each=200)  # Gruppierung für ggplot
)

ggplot(df_SUS, aes(x, y, color=Gruppe)) +
  geom_line(size=1) +
  ggtitle("SUS Verteilungen im Vergleich") +
  xlab("SUS Score") + ylab("Dichte") +
  theme(plot.title = element_text(hjust = 0.5))

# UEQ Hypothesentests

## Übersichtlichkeit
p_vals <- hypo_test(df$ownÜbersichtZuVerwirrend, df$hrzÜbersichtZuVerwirrend)

## Als "gut" empfunden
p_tmp<- hypo_test(df$ownGutZuSchlecht, df$hrzGutZuSchlecht)
p_vals <- data.frame(tTest = c(p_vals$tTest, p_tmp$tTest), wilcoxTest = c(p_vals$wilcoxTest, p_tmp$wilcoxTest))

## Effizienz
p_tmp<- hypo_test(df$ownIneffiZuEffi, df$hrzIneffiZuEffi)
p_vals <- data.frame(tTest = c(p_vals$tTest, p_tmp$tTest), wilcoxTest = c(p_vals$wilcoxTest, p_tmp$wilcoxTest))

## Einfachheit
p_tmp<- hypo_test(df$ownKomplZuEinf, df$hrzKomplZuEinf)
p_vals <- data.frame(tTest = c(p_vals$tTest, p_tmp$tTest), wilcoxTest = c(p_vals$wilcoxTest, p_tmp$wilcoxTest))

## Verständlichkeit
p_tmp<- hypo_test(df$ownUnverständZuVerständ, df$hrzUnverständZuVerständ)
p_vals <- data.frame(tTest = c(p_vals$tTest, p_tmp$tTest), wilcoxTest = c(p_vals$wilcoxTest, p_tmp$wilcoxTest))

## Lernbarkeit
p_tmp<- hypo_test(df$ownLeichtZuLernenZuSchwerZuLernen, df$hrzLeichtZuLernenZuSchwerZuLernen)
p_vals <- data.frame(tTest = c(p_vals$tTest, p_tmp$tTest), wilcoxTest = c(p_vals$wilcoxTest, p_tmp$wilcoxTest))

## Berechenbarkeit
hypo_test(df$ownUnberechenZuBerechen, df$hrzUnberechenZuBerechen)

## Sicherheit
hypo_test(df$ownSicherZuUnsicher, df$hrzSicherZuUnsicher)

## Neuartigkeit
hypo_test(df$ownHerkömmZuNeu, df$hrzHerkömmZuNeu)

p_adj_t = p.adjust(p_vals$tTest, method = "holm")
p_adj_t

p_adj_w = p.adjust(p_vals$wilcoxTest, method = "holm")
p_adj_w

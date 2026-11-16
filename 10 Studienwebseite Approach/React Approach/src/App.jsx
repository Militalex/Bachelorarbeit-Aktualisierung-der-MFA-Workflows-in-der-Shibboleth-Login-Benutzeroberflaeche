import { Sites, WelcomeSite } from "./study_frame_site/Sites";

const currentView = Sites.WELCOME_SITE

const App = () => {
  switch (currentView){
    case Sites.WELCOME_SITE:
      return WelcomeSite();
  }
}

export default App
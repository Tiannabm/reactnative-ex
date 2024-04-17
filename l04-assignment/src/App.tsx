import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Bio from './pages/Bio';
import Friends from './pages/Friends';
import Photos from './pages/Photos';
import Posts from './pages/Posts';
import ProfileHeader from './components/ProfileHeader';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    
      <IonRouterOutlet>
        <Route exact path="/profile/bio">
          <Bio />
        </Route>
        <Route exact path="/profile/friends">
          <Friends />
        </Route>
        <Route exact path="/profile/photos">
          <Photos />
        </Route>
        <Route exact path="/profile/posts">
          <Posts />
        </Route>
        <Route exact path="/">
          <Redirect to="/profile/bio" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

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
import './theme/variables.dark.css';

import './styles.css';

import { home, person, statsChart } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { toastController } from '@ionic/core';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { PrivateRoute } from './components';
import { UserProfile } from './models';
import { Home, Learn, Login, Profile, ResetPassword, Signup, Splash, Statistics } from './pages';
import { profileService, toastService } from './services';
import AppContext from './AppContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribeUser = profileService.onCurrentUserChanged(user => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    const unsubscribeToast = toastService.onNextToast(options => {
      toastController.create(options).then(toast => {
        toast.present();
      });
    });

    return () => {
      unsubscribeUser.unsubscribe();
      unsubscribeToast.unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = currentUser ? `${currentUser.fontSize * 16}px` : '';
    document.body.classList.toggle('dark', currentUser ? currentUser.darkTheme : false);
  }, [currentUser]);

  return (
    <IonApp>
      <AppContext.Provider value={{ currentUser, simpleMode: currentUser ? currentUser.simpleMode : true }}>
        {isLoading ? (
          <Splash />
        ) : (
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <PrivateRoute path="/home" component={Home} exact />
                <PrivateRoute path="/learn" component={Learn} />
                <Route path="/login" component={Login} exact />
                <PrivateRoute path="/profile" component={Profile} exact />
                <Route path="/reset-password" component={ResetPassword} exact />
                <Route path="/signup" component={Signup} exact />
                <PrivateRoute path="/stats" component={Statistics} exact />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="stats" href="/stats">
                  <IonIcon icon={statsChart} />
                  <IonLabel>Statistics</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                  <IonIcon icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        )}
      </AppContext.Provider>
    </IonApp>
  );
};

export default App;

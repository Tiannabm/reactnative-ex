import { IonContent, IonPage } from "@ionic/react";
import ProfileHeader from "../components/ProfileHeader";


const Bio: React.FC = () => {
    return (
        <IonPage>
            
            <IonContent fullscreen>
               <ProfileHeader/>
                <h4> <strong> My Bio </strong> </h4>
                <p>dog ipsum smol heck walkies nuggs pupperino snoot sploot mahm heck snoot walkies pupper floofer cronch teefs 
                    yapper snacc mahm blep zoomies noods woofer danger noodle pupperino derp awoo bamboozle nuggs blop danger noodle floof long boi heck henlo happ danger noodle happ pupperino snacc noods long boi henlo teefs chimken bork snoot bamboozle bamboozle snoot
                    <br/>
                    <br/>
                gib pupper floof bork floofer tippy taps pupperino boop yapper danger noodle boi henlo tippy taps awoo boop danger
                 noodle smol blep blep toe beans noods boop long boi woofer woofer gib sploot bamboozle heckin nuggs loaf boof toe beans sleppy sploot happ blep zoomies boi fluffer heck tippy taps sploot blep snacc teefs mahm pats sleppy smol blop walkies fren mahm pats pupper snacc zoomies cronch cloud bork nuggs bamboozle floofer chonk danger noodle</p>
            </IonContent>
        </IonPage>
    )
};

export default Bio;
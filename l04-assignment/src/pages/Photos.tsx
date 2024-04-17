import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from "@ionic/react";
import ProfileHeader from "../components/ProfileHeader";


const Photos: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <ProfileHeader />

                <h4> <strong> My Photos </strong> </h4>

                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="beautiful park"
                                src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></IonImg>
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="dog/ cat staredown"
                                src="https://plus.unsplash.com/premium_photo-1664304973210-aee8dfc4d0dc?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></IonImg>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="doggie paws behind bars"
                                src="https://media.istockphoto.com/id/940375494/photo/homeless-dog-behind-bars-animal-sanctuary.jpg?s=1024x1024&w=is&k=20&c=1PeATnk8LvhsZpt_vAlQ-NvCoAXp82FUwwopQdDwCus="></IonImg>
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="beach sunset"
                                src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></IonImg>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="fire hydrant"
                                src="https://images.unsplash.com/photo-1442595417792-914c08ed5a41?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></IonImg>
                        </IonCol>
                        <IonCol size="6">
                            <IonImg className="photoPG" alt="herd of dogs"
                                src="https://media.istockphoto.com/id/155383196/photo/here-come-the-girls.webp?b=1&s=170667a&w=0&k=20&c=6oA4GfWRUXOhsxcOB2f_ivC_tekumxxrA2KwXmI0_Wk="></IonImg>
                        </IonCol>
                    </IonRow>

                </IonGrid>
                
            </IonContent>
        </IonPage>
    
    )
};

export default Photos;
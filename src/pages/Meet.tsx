import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonButton, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonChip, IonGrid, IonRow, IonCol } from "@ionic/react";
import { ban, trash, create, chevronForward } from "ionicons/icons";
import React, { useRef } from "react";

export const FRIENDS_DATA = [
	{ id: 'f1', name: 'John Thor', image: 'https://i.insider.com/5976504556152c39e51fd729?width=1000&format=jpeg&auto=webp' },
	{ id: 'f2', name: 'John Ness', image: 'https://i1.sndcdn.com/avatars-ylM4tanwBXJZhjWb-X76mWw-t500x500.jpg' },
	{ id: 'f3', name: 'John Doe', image: 'https://www.aquariumofpacific.org/images/exhibits/Magnificent_Tree_Frog_900.jpg' }
]

const Meet: React.FC = () => {
	const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
	
	const callFriendHandler = () => {
		console.log('Calling...')
	}

	const blockFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('Blocking...')
	}

	const deleteFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('Deleting...')
	}

	const editingFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('Editing...')
	}

	return (
		<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Meet</IonTitle>
			</IonToolbar>
		</IonHeader>

    <IonContent>
			<IonList>
				{FRIENDS_DATA.map(friend => (
					<IonItemSliding key={friend.id} ref={slidingOptionsRef}>
						<IonItemOptions side="start">
							<IonItemOption color="danger" onClick={blockFriendHandler}>
								<IonIcon icon={ban} slot="icon-only" />
							</IonItemOption>

							<IonItemOption color="warning" onClick={deleteFriendHandler}>
								<IonIcon icon={trash} slot="icon-only" />
							</IonItemOption>
						</IonItemOptions>

						<IonItemOptions side="end">
							<IonItemOption color="warning" onClick={editingFriendHandler}>
								<IonIcon icon={create} slot="icon-only" />
							</IonItemOption>
						</IonItemOptions>

						<IonItem lines="full" button onClick={callFriendHandler}>
							<IonAvatar slot="start">
								<img src={friend.image} />
							</IonAvatar>
							<IonLabel>{friend.name}</IonLabel>
							<IonIcon icon={chevronForward} slot="end" />
						</IonItem>
					</IonItemSliding>
				))}
			</IonList>
    </IonContent>
  </IonPage>
	)
}

export default Meet;

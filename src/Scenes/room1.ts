import { Door } from "src/Components/door";

export const CreateRoom1 = () => {
  const door: any = new Door(
    new GLTFShape("models/room1/Puzzle01_Door.glb"),
    {
      position: new Vector3(21.18, 10.9, 24.5),
    },
    new AudioClip("sounds/door_squeak.mp3")
  );

  let doorOpen = false;
  door.addComponent(
    new OnPointerDown((): void => {
      if (!doorOpen) {
        doorOpen = true;
        door.openDoor();
      }
    })
  );
};

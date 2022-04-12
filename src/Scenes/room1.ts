export const CreateRoom1 = () => {
  const door = new Entity();
  engine.addEntity(door);
  door.addComponent(new GLTFShape("models/room1/Puzzle01_Door.glb"));

  door.addComponent(
    new Transform({
      position: new Vector3(21.18, 10.9, 24.5),
    })
  );

  door.addComponent(new Animator());
  door
    .getComponent(Animator)
    .addClip(new AnimationState("Door_Open", { looping: false }));

  door.addComponent(new AudioSource(new AudioClip("sounds/door_squeak.mp3")));

  let doorOpen = false;
  door.addComponent(
    new OnPointerDown((): void => {
      if (!doorOpen) {
        doorOpen = true;
        door.getComponent(Animator).getClip("Door_Open").play();
        door.getComponent(AudioSource).playOnce();
      }
    })
  );
};

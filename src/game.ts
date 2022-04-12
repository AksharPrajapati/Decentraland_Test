const baseScene = new Entity();
engine.addEntity(baseScene);
baseScene.addComponent(new GLTFShape("models/scene.glb"));

const door = new Entity();
engine.addEntity(door);
door.addComponent(new GLTFShape("models/room1/Puzzle01_Door.glb"));

door.addComponent(
  new Transform({
    position: new Vector3(21.18, 10.9, 24.5),
  })
);

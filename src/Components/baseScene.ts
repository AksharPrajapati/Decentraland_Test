export const BaseScene = () => {
  const baseScene = new Entity();
  engine.addEntity(baseScene);
  baseScene.addComponent(new GLTFShape("models/scene.glb"));
};

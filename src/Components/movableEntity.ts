import * as utils from "@dcl/ecs-scene-utils";

export class MovableEntity extends Entity {
  constructor(model: any, tranformation: any, audioClip: any, delta: any) {
    super();

    engine.addEntity(this);
    this.addComponent(model);

    this.addComponent(new Transform(tranformation));
    this.addComponent(new AudioSource(new AudioClip("")));

    const startPos = tranformation.position;
    const endPos = tranformation.position.add(delta);

    this.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, (value) => {
        if ((value = utils.ToggleState.On)) {
          this.addComponentOrReplace(
            new utils.MoveTransformComponent(
              tranformation.position,
              endPos,
              0.5
            )
          );
        } else {
          this.addComponentOrReplace(
            new utils.MoveTransformComponent(
              tranformation.position,
              startPos,
              0.5
            )
          );
        }
      })
    );
  }
}

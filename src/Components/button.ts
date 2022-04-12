export class Button extends Entity {
  constructor(model: any, transform: any, audioClip: any) {
    super();

    engine.addEntity(this);
    this.addComponent(model);

    this.addComponent(new Transform(transform));

    this.addComponent(new Animator());
    this.getComponent(Animator).addClip(
      new AnimationState("Button_Action", { looping: false })
    );

    this.addComponent(audioClip);
  }

  public press(audioClip: any) {
    this.getComponent(Animator).getClip("Button_Action").stop();
    this.getComponent(Animator).getClip("Button_Action").play();
    if (audioClip) {
      this.getComponent(AudioSource).playOnce();
    }
  }
}

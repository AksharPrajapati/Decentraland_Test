export class Door extends Entity {
  constructor(model: any, transform: any, audioClip: any) {
    super();
    engine.addEntity(this);
    this.addComponent(model);

    this.addComponent(new Transform(transform));

    this.addComponent(new Animator());
    this.getComponent(Animator).addClip(
      new AnimationState("Door_Open", { looping: false })
    );
    this.getComponent(Animator).addClip(
      new AnimationState("Door_Close", { looping: false })
    );

    this.addComponent(new AudioSource(audioClip));
  }

  public openDoor(audioClip: any) {
    this.getComponent(Animator).getClip("Door_Close").stop();
    this.getComponent(Animator).getClip("Door_Open").play();
    if (audioClip) {
      this.getComponent(AudioSource).playOnce();
    }
  }

  public closeDoor(audioClip: any) {
    this.getComponent(Animator).getClip("Door_Open").stop();
    this.getComponent(Animator).getClip("Door_Close").play();
    if (audioClip) {
      this.getComponent(AudioSource).playOnce();
    }
  }
}

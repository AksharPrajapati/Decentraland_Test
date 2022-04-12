export class CountDown extends Entity {
  constructor(transforms: any) {
    super();

    engine.addEntity(this);
    this.addComponent(new Transform(transforms));

    this.addComponent(new TextShape());
    this.getComponent(TextShape).color = Color3.Red();
    this.getComponent(TextShape).fontSize = 5;
  }

  private formatTimeString(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return (
      mins.toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
      ":" +
      secs.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    );
  }

  public updateTimer(seconds: number) {
    this.getComponent(TextShape).value = this.formatTimeString(seconds);
  }
}

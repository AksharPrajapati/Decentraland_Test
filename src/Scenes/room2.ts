import * as utils from "@dcl/ecs-scene-utils";
import { Button } from "src/Components/button";
import { Door } from "src/Components/door";
import { CountDown } from "src/Components/timer";

const DefaultTime = 5;

export const CreateRoom2 = () => {
  const door: any = new Door(
    new GLTFShape("models/room2/Puzzle02_Door.glb"),
    { position: new Vector3(24.1, 5.51, 24.9) },
    new AudioClip("sounds/door_squeak.mp3")
  );

  const button: any = new Button(
    new GLTFShape("models/room2/Square_Button.glb"),
    { position: new Vector3(26.37, 6.89, 26.89) },
    new AudioSource(new AudioClip("button.mp3"))
  );

  const countDown = new CountDown({
    position: new Vector3(25.12, 9.3, 25.21),
    rotation: Quaternion.Euler(20, 180, 0),
  });
  countDown.updateTimer(DefaultTime);

  button.addComponent(
    new OnPointerDown((): void => {
      if (!countDown.hasComponent(utils.Interval)) {
        button.press();
        door.openDoor();

        let remainingTime = DefaultTime;
        countDown.addComponent(
          new utils.Interval(1000, () => {
            remainingTime--;

            if (remainingTime > 0) {
              countDown.updateTimer(remainingTime);
            } else {
              countDown.removeComponent(utils.Interval);
              door.closeDoor();

              countDown.updateTimer(DefaultTime);
            }
          })
        );
      }
    })
  );
};

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 78.0000052575756,
        y: 50.70113400373506
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.take = 0;
    this.stage.vars.applesDonated = 0;
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        yield* this.askAndWait("amount");
        if (this.stage.vars.apples > this.answer) {
          this.stage.vars.applesDonated += this.answer;
          this.stage.vars.apples += -1 * this.answer;
        }
        if (this.answer < 0) {
          this.stage.vars.take += this.answer * -1;
          if (this.stage.vars.applesDonated < 0) {
            this.stage.vars.taxOwe += this.stage.vars.take * 1.9;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.applesDonated > this.stage.vars.HighestDonated) {
        this.stage.vars.HighestDonated = this.stage.vars.applesDonated;
      }
      yield;
    }
  }
}

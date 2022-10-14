/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FasterCps extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./FasterCps/costumes/costume1.svg", {
        x: 157.5,
        y: 39.75
      }),
      new Costume("costume2", "./FasterCps/costumes/costume2.svg", {
        x: 157.5,
        y: 39.75
      })
    ];

    this.sounds = [new Sound("pop", "./FasterCps/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.price3 = 100;

    this.watchers.price3 = new Watcher({
      label: "FasterCps: price",
      style: "large",
      visible: true,
      value: () => this.vars.price3,
      x: 402,
      y: -85
    });
  }

  *whenGreenFlagClicked() {
    this.vars.price3 = 100;
    this.costume = "costume1";
    this.goto(80, -155);
    while (true) {
      if (
        this.stage.vars.apples > this.vars.price3 &&
        this.touching("mouse") && this.mouse.down
      ) {
        this.stage.vars.apples += this.vars.price3 * -1;
        this.stage.vars.cpsSpeed += (this.stage.vars.cpsSpeed / 9) * -1;
        this.vars.price3 += Math.round(this.vars.price3 * 0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.watchers.price3.visible = true;
      if (this.keyPressed(9)) {
        this.stage.watchers.cpsSpeed.visible = true;
      } else {
        this.stage.watchers.cpsSpeed.visible = false;
      }
      yield;
    }
  }
}

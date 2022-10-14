/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MoreCps extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MoreCps/costumes/costume1.svg", {
        x: 157.5,
        y: 39.75
      }),
      new Costume("costume2", "./MoreCps/costumes/costume2.svg", {
        x: 157.5,
        y: 39.75
      })
    ];

    this.sounds = [new Sound("pop", "./MoreCps/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.price2 = 49;

    this.watchers.price2 = new Watcher({
      label: "MoreCps: price",
      style: "large",
      visible: true,
      value: () => this.vars.price2,
      x: 589,
      y: -78
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.vars.price2 = 49;
    this.goto(264, -150);
    while (true) {
      if (
        this.stage.vars.apples > this.vars.price2 &&
        this.touching("mouse") && this.mouse.down
      ) {
        this.stage.vars.apples += this.vars.price2 * -1;
        this.stage.vars.cps += this.random(10, 50);
        this.vars.price2 += Math.round(this.vars.price2 * 0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed(9)) {
        this.stage.watchers.cps.visible = true;
      } else {
        this.stage.watchers.cps.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.watchers.price2.visible = true;
  }
}

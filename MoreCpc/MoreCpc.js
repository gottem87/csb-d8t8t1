/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MoreCpc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MoreCpc/costumes/costume1.svg", {
        x: 157.5,
        y: 39.75
      }),
      new Costume("costume2", "./MoreCpc/costumes/costume2.svg", {
        x: 157.5,
        y: 39.75
      })
    ];

    this.sounds = [new Sound("pop", "./MoreCpc/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];

    this.vars.price = 25;

    this.watchers.price = new Watcher({
      label: "MoreCpc: price",
      style: "large",
      visible: true,
      value: () => this.vars.price,
      x: 260,
      y: -83
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.goto(-58, -155);
    while (true) {
      if (
        this.stage.vars.apples > this.vars.price &&
        this.touching("mouse") && this.mouse.down
      ) {
        this.stage.vars.apples += this.vars.price * -1;
        this.stage.vars.cpc += this.random(10, 500);
        this.vars.price += Math.round(this.vars.price * 0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed(9)) {
        this.stage.watchers.cpc.visible = true;
      } else {
        this.stage.watchers.cpc.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.vars.price = 25;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.watchers.price.visible = true;
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.stage.vars.apples = Math.round(this.stage.vars.apples);
      yield;
    }
  }
}

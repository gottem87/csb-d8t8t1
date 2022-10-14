/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Apple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("apple", "./Apple/costumes/apple.svg", { x: 31, y: 31 })
    ];

    this.sounds = [new Sound("Chomp", "./Apple/sounds/Chomp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "move apple" },
        this.whenIReceiveMoveApple
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.cpc = 1;
    this.stage.vars.apples = 0;
    this.goto(0, 0);
    while (true) {
      if (this.keyPressed("space")) {
        while (!!this.keyPressed("space")) {
          yield;
        }
        yield* this.startSound("Chomp");
        this.stage.vars.apples += this.stage.vars.cpc;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.cpc = 1;
    this.stage.vars.apples = 0;
    this.stage.vars.cps = 0;
    this.goto(0, 0);
    while (true) {
      this.stage.vars.apples += this.stage.vars.cps;
      yield* this.wait(this.stage.vars.cpsSpeed);
      yield;
    }
  }

  *whenIReceiveMoveApple() {
    while (true) {
      if (this.keyPressed("down arrow")) {
        this.y += -5;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 5;
      }
      if (this.keyPressed("left arrow")) {
        this.x += -5;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 5;
      }
      yield;
    }
  }
}

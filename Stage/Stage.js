/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 236.75,
        y: 53.822578985275015
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.apples = 330;
    this.vars.cpc = 1;
    this.vars.cps = 0;
    this.vars.cpsSpeed = 5;
    this.vars.HighestScore = "9e+61";
    this.vars.taxOwe = 0;
    this.vars.taxPaid = 5;
    this.vars.applesDonated = 0;
    this.vars.HighestDonated = "201000000000007840";
    this.vars.take = 0;

    this.watchers.apples = new Watcher({
      label: "apples",
      style: "large",
      visible: true,
      value: () => this.vars.apples,
      x: 312,
      y: 145
    });
    this.watchers.HighestScore = new Watcher({
      label: "☁ highest score",
      style: "normal",
      visible: true,
      value: () => this.vars.HighestScore,
      x: 311,
      y: 180
    });
    this.watchers.taxOwe = new Watcher({
      label: "tax owe",
      style: "large",
      visible: true,
      value: () => this.vars.taxOwe,
      x: 569,
      y: 149
    });
    this.watchers.applesDonated = new Watcher({
      label: "apples donated",
      style: "large",
      visible: true,
      value: () => this.vars.applesDonated,
      x: 337,
      y: 30
    });
    this.watchers.HighestDonated = new Watcher({
      label: "☁ highest donated",
      style: "large",
      visible: true,
      value: () => this.vars.HighestDonated,
      x: 337,
      y: 54
    });
  }
}

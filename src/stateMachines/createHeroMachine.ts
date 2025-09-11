import { createMachine, setup } from "xstate";
import { Hero } from "../game/sprites/Hero";

export function createHeroMachine(hero: Hero) {
    return setup({
        actions: {
            jumpAction: hero.jump,
            forwardAction: hero.runRight,
            backwardAction: hero.runLeft
        },
    }).createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5QAswCcD2A6AlhANmAMQBmGaA7gIZoQDSYAngCIYUB2A2gAwC6ioAA4ZYOAC44M7ASAAeiAEzcAjABoQjRAE5uWAGwKArNwUAWFQA4TC5YYC+d9aky4CxAEZUAxgGtqtBhY2Lj4ZYVEJKRl5BABaI2UsZVMrbi1DAGYMgHYFbNMFdU0EZT1dZRs9U0MLDK1bPIyHJ3RsPEIiACsAVwBbQUDWDh5+JBBw8UlpMZjY5XqsJRtubL0tC0M9DOVsosRYjaTTDLS9bJWlK1NmkGdsHv6ifCp2CBGwkUmomcQ9PSOqhZTOs9MptrsNPttlgLBVjMCdKYDGCHI4QOwMBA4DI7h8IlNovtjIVIXEbNksAitPlDLlbFUbndXIQ8V9pqAYsksKsUjk6qYCjsLCTijp9EYTOZlFYFDZ7Gimb0MAA3MAAMXI-ggrMi7LkiBSalJYoMxKlMrljNaWCVqoAQt4-DRtWMJrrCXFqqY9gh1lhuAGTCZcjUMrCrS4HoIdQSfiUaj65gotFgtGnqbKMnpMulUXYgA */
        id: "hero",

        initial: "idle",

        states: {
            idle: {
                on: {
                    forwardKeyDown: {
                        target: "moveForward",
                        reenter: true,
                    },

                    backwardKeyDown: "moveBackward",
                    jumpKeyDown: {
                        target: "jump",
                        actions: () => console.log("hello"),
                    },
                },
            },

            moveForward: {
                entry: "forwardAction",
            },
            moveBackward: {
                entry: [{ type: "backwardAction" }],
            },
            jump: {
                entry: [{ type: "jumpAction" }],
                on: {
                    land: "idle",
                },
            },
        },
    });
}


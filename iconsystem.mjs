import { PlayerCharacterDataModel, EnemyDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {
    CONFIG.Actor.dataModels = {
        character: PlayerCharacterDataModel,
        enemy: EnemyDataModel
    };
    
    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["resources.health", "resources.shield"]
        },
        enemy: {
            bar: ["resources.health", "resources.shield"]
        }
    };
});
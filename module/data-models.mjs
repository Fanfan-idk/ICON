const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* ---------------- */
/*  Actor Models    */
/* ---------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            name: new StringField({ required: true, blank: true }),
            resources: new SchemaField({
                health: new SchemaField({
                    min: new NumberField({ required: true, integer: true, min: 0, intial: 0}),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 20}),
                    max: new NumberField({ required: true, integer: true, min: 0, intial: 20})
                }),
                shield: new SchemaField({
                    min: new NumberField({ required: true, integer: true, min: 0, intial: 0}),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 5}),
                    max: new NumberField({ required: true, integer: true, min: 0, intial: 5})
                })
            }),
            freeMove: new NumberField({ required: true, integer: true, min: 0, intial: 4 }),
            defense: new NumberField({ required: true, integer: true, min: 0, intial: 3 })
        };
    }
}

class PlayerCharacterDataModel extends ActorDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            mainJob: new StringField({ required: true, blank: true }),
            sideJob: new StringField({ required: true, blank: true }),
            biography: new HTMLField({ required: true, blank: true })
        };
    }
}

class EnemyDataModel extends ActorDataModel {}


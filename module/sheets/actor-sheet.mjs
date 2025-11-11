export class IconActorSheet extends ActorSheet {
    
    /** @Override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['icon', 'sheet', 'acctor'],
            template: 'systems/ICON/templates/actor/actor-sheet.html',
            width: 600,
            height: 600,
            tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'info' }]
        });
    }

    /** @Override */
    get template() {
        return 'systems/ICON/templates/actor/actor-${this.actor.type}-sheet.html';
    }
}
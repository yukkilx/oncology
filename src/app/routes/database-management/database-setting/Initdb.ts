import {SaveList} from '../../survey-management/shared/example';

export class Initdb {

    questions = new SaveList().questions;

    stepkey = new SaveList().step_key;

    Initdb() {
        const dbsave = [];
        for (let i = 0; i < this.stepkey.length; i++) {
            const dbitem = {
                'step_key': this.stepkey[i],
                'item_key': []
            };
            const items = this.questions[this.stepkey[i]]['items'];
            for (let j = 0; j < items.length; j++) {
                if (items[j].type === 'high-table') {
                    const subitem = items[j];
                    for ( let row = 0; row < subitem.rowTitle.length; row++) {
                        for (let col = 0; col < subitem.columnTitle.length; col++) {
                            dbitem.item_key.push(subitem.id_title + '.' + row + '.' + col);
                        }
                    }
                    if (items[j].overall) {
                        dbitem.item_key.push(subitem.id_title + 'overall');
                    }
                } else {
                    dbitem.item_key.push(items[j].dbId);
                }

            }
            dbsave.push(dbitem);
        }
        console.log(dbsave);
        return dbsave;

    }

}

// const Initdbs = new Initdb();
// Initdbs.Initdb();

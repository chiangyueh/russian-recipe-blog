
import { action, makeObservable, observable } from "mobx";

interface params {
    tags: Array<string>,
    title: string,
    _id: string,
    imgUrl: string
}
class SearchArticle {
    input: Array<params>
    constructor() {
        this.input = []
        makeObservable(this, {
            input: observable,
            add: action,
            delete: action
        })
    }
    add(prop : Array<params>) {
        this.input = prop
    }
    delete() {
        this.input = []
    }
}
const searchArticle = new SearchArticle()
export default searchArticle
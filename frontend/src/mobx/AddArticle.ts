
import { action, makeObservable, observable } from "mobx";
class AddArticle{
    count : boolean
    constructor(){
        this.count = false
        makeObservable(this,{
            count : observable,
            open : action,
            close : action
        })
    }
    open(){
        this.count = true
    }
    close(){
        this.count = false
    }
}
const addArticle = new AddArticle()
export default addArticle
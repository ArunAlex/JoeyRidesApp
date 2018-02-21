import { AngularFirestoreCollection } from "angularfire2/firestore";
import { Child } from "./child";
import { List } from "ionic-angular/components/list/list";

export interface User{
    id:string;
    name:string,
    email:string,
    password:string,
    phone: string,
    address: string,
    isJoey:boolean,
    token: any,
    child: Array<Child>
}
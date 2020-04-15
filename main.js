import {getFirebaseData} from "./firebase";
import nodes from "./nodes";
import "./form";
import {from, to} from "./form";

nodes.forEach((node, index) => {
    getFirebaseData(node, index, from, to);
});

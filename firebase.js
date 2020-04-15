import * as firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

import { addData, myChart, removeData } from "./chart";

export function getFirebaseData(node, dataset, from, to, refresh = false) {
  if (refresh && dataset === 0) {
    removeData(myChart);
  }
  let valueRef = firebase.database().ref("/server/saving-data/temp/" + node);
  valueRef
    .orderByChild("timestamp")
    .startAt(new Date(from).toISOString())
    .endAt(new Date(to).toISOString())
    .on("child_added", function(snapshot) {
      let timestamp = new Date(snapshot.val().timestamp);
      addData(myChart, timestamp.toLocaleString(), dataset, {
        t: timestamp,
        y: snapshot.val().temp
      });
    });
}

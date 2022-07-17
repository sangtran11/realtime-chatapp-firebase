import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirebase = (collection, conditions) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createdAt");
    /**
     * Conditions
     * {
     *    fieldName: "name",
     *    operator: "=, >, < ...",
     *    compareValue: "Sang"
     * }
     */
    if (conditions) {
      const { fieldName, operator, compareValue } = conditions;
      if (!compareValue || !compareValue.length) return;
      collectionRef = collectionRef.where(fieldName, operator, compareValue);
    }

    const unsubcribe = collectionRef.onSnapshot((snapShot) => {
      const documents = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return unsubcribe;
  }, [collection, conditions]);

  return documents;
};

export default useFirebase;

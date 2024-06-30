"use client";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { useFirestoreCollectionData } from "reactfire";
import { limit } from "@firebase/firestore";

export interface IQuery {
  type: "where" | "orderBy" | "limit";
  field?: string;
  operator?:
    | "!="
    | "=="
    | "<"
    | "<="
    | ">"
    | ">="
    | "array-contains"
    | "in"
    | "array-contains-any"
    | "not-in";
  value?: any;
  direction?: "asc" | "desc";
  limit?: number;
}

interface IProps {
  collectionPath: string;
  queries?: IQuery[];
  loadData?: boolean;
}

export const useFirebase = ({
  collectionPath,
  queries = [],
  loadData = true,
}: IProps) => {
  const [docs, setDocs] = useState([]);
  let unsubscribe;

  const getCollectionRef = () => {
    return collection(db, collectionPath);
  };

  const listenCollection = (
    queries: IQuery[] = [],
    collectionPath?: string
  ) => {
    const queryRef = collectionPath
      ? getQueryRef(queries, collection(db, collectionPath))
      : getQueryRef(queries);

    unsubscribe = onSnapshot(queryRef, (snapshot) => {
      setDocs(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          path: doc.ref.path,
        }))
      );
    });
  };

  const getQueryRef = (queries: IQuery[] = [], distinctCollectionRef?) => {
    let queryRef: any = query(distinctCollectionRef || getCollectionRef());
    queries.forEach((queryItem) => {
      if (
        queryItem.field &&
        queryItem.operator &&
        queryItem.value &&
        queryItem.limit
      ) {
        if (queryItem.type === "where") {
          queryRef = query(
            queryRef,
            where(queryItem.field, queryItem.operator, queryItem.value)
          );
        } else if (queryItem.type === "orderBy") {
          queryRef = query(
            queryRef,
            orderBy(queryItem.field, queryItem.direction)
          );
        } else if (queryItem.type === "limit") {
          queryRef = query(queryRef, limit(queryItem.limit));
        }
      }
    });

    return queryRef;
  };

  useEffect(() => {
    return () => {
      return unsubscribe && unsubscribe();
    };
  }, [unsubscribe]);

  return {
    listenCollection,
    docs,
    ...(loadData
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useFirestoreCollectionData(getQueryRef(queries), {
          idField: "id",
          initialData: [],
        })
      : {}),
  };
};

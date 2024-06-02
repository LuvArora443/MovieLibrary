import { db } from "../services/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useFirestore = () => {
  const toast = useToast();
  const addDocument = async (collectionName, data) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  };

  const addToWatchlist = async (userId, dataId, data) => {
    try {
      if (await checkIfInWatchlist(userId, dataId)) {
        toast({
          title: "Error!",
          description: "This item is already in your wathclist.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return false;
      }
      await setDoc(doc(db, "users", userId, "watchlist", dataId), data);
      toast({
        title: "Success!",
        description: "Added to watchlist",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      console.log(error, "Error adding document");
      toast({
        title: "Error!",
        description: "An error occurred.",
        status: "error",
        isClosable: true,
      });
    }
  };

  const checkIfInWatchlist = async (userId, dataId) => {
    const docRef = doc(
      db,
      "users",
      userId?.toString(),
      "watchlist",
      dataId?.toString()
    );

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  };

  const removeFromWatchlist = async (userId, dataId) => {
    try {
      await deleteDoc(
        doc(db, "users", userId?.toString(), "watchlist", dataId?.toString())
      );
      toast({
        title: "Success!",
        description: "Removed from watchlist",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "An error occurred.",
        status: "error",
        isClosable: true,
      });
      console.log(error, "Error while deleting doc");
    }
  };

  const getWatchlist = useCallback(async (userId) => {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, "watchlist")
    );
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    return data;
  }, []);

  return {
    addDocument,
    addToWatchlist,
    checkIfInWatchlist,
    removeFromWatchlist,
    getWatchlist,
  };
};

// import { db } from "../services/firebase";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   setDoc,
// } from "firebase/firestore";
// import { useToast } from "@chakra-ui/react";
// import { useCallback } from "react";

// export const useFirestore = () => {
//   const toast = useToast();

//   const addDocument = async (collectionName, data) => {
//     const docRef = await addDoc(collection(db, collectionName), data);
//     console.log("Document written with ID: ", docRef.id);
//   };

// //   const addToWatchlist = async (userId, dataId, data, isPublic = false) => {
// //     const listType = isPublic ? "publicWatchlist" : "watchlist";
// //     try {
// //       if (await checkIfInWatchlist(userId, dataId, isPublic)) {
// //         toast({
// //           title: "Error!",
// //           description: "This item is already in your watchlist.",
// //           status: "error",
// //           duration: 9000,
// //           isClosable: true,
// //         });
// //         return false;
// //       }
// //       await setDoc(doc(db, "users", userId, listType, dataId), data);
// //       toast({
// //         title: "Success!",
// //         description: `Added to ${isPublic ? "public" : "private"} watchlist`,
// //         status: "success",
// //         isClosable: true,
// //       });
// //     } catch (error) {
// //       console.log(error, "Error adding document");
// //       toast({
// //         title: "Error!",
// //         description: "An error occurred.",
// //         status: "error",
// //         isClosable: true,
// //       });
// //     }
// //   };

// const addToWatchlist = async (userId, dataId, data, isPublic = false) => {
//     const listType = isPublic ? "publicWatchlist" : "watchlist";
//     try {
//       if (await checkIfInWatchlist(userId, dataId, isPublic)) {
//         toast({
//           title: "Error!",
//           description: "This item is already in your watchlist.",
//           status: "error",
//           duration: 9000,
//           isClosable: true,
//         });
//         return false;
//       }
  
//       await setDoc(doc(db, "users", userId, listType, dataId), data);
  
//       if (isPublic) {
//         await setDoc(doc(db, "users", userId, "watchlist", dataId), data); // Add to private watchlist as well
//       }
  
//       toast({
//         title: "Success!",
//         description: `Added to ${isPublic ? "public" : "private"} watchlist`,
//         status: "success",
//         isClosable: true,
//       });
//     } catch (error) {
//       console.log(error, "Error adding document");
//       toast({
//         title: "Error!",
//         description: "An error occurred.",
//         status: "error",
//         isClosable: true,
//       });
//     }
//   };
  

//   const checkIfInWatchlist = async (userId, dataId, isPublic = false) => {
//     const listType = isPublic ? "publicWatchlist" : "watchlist";
//     const docRef = doc(db, "users", userId?.toString(), listType, dataId?.toString());
//     const docSnap = await getDoc(docRef);
//     return docSnap.exists();
//   };

//   const removeFromWatchlist = async (userId, dataId, isPublic = false) => {
//     const listType = isPublic ? "publicWatchlist" : "watchlist";
//     try {
//       await deleteDoc(doc(db, "users", userId?.toString(), listType, dataId?.toString()));
//       toast({
//         title: "Success!",
//         description: `Removed from ${isPublic ? "public" : "private"} watchlist`,
//         status: "success",
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: "Error!",
//         description: "An error occurred.",
//         status: "error",
//         isClosable: true,
//       });
//       console.log(error, "Error while deleting doc");
//     }
//   };

//   const getWatchlist = useCallback(async (userId, isPublic = false) => {
//     const listType = isPublic ? "publicWatchlist" : "watchlist";
//     const querySnapshot = await getDocs(collection(db, "users", userId, listType));
//     const data = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//     }));
//     return data;
//   }, []);

//   const getPublicWatchlist = useCallback(async (userId) => {
//     const querySnapshot = await getDocs(collection(db, "users", userId, "publicWatchlist"));
//     const data = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//     }));
//     return data;
//   }, []);

//   return {
//     addDocument,
//     addToWatchlist,
//     checkIfInWatchlist,
//     removeFromWatchlist,
//     getWatchlist,
//     getPublicWatchlist,
//   };
// };

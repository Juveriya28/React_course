const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteCollection : String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    appwritUrl : String(import.meta.env.VITE_APPWRITE_DATABASEID)
}

export default conf
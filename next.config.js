const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "Aryan",
                mongodb_password: "9cqG8zNZUzHLvcR9",
                mongodb_cluster: "cluster0",
                mongodb_database: "NextJs-dev"
            }
        }
    } else {
        return {
            env: {
                mongodb_username: "Aryan",
                mongodb_password: "9cqG8zNZUzHLvcR9",
                mongodb_cluster: "cluster0",
                mongodb_database: "NextJs"
            }
        }
    }
}
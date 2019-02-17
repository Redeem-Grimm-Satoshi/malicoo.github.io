export default {



    methods: {

        /**
         * Show an error message.
         */
        alertError(message) {

            UIkit.notification({
                message: message,
                status: 'danger'
            })
        },

    }
};

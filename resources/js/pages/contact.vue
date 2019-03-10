<template>
    <div class="home">
        <nav-bar />
        <div class='container'>
            <div class="text-center text-white pb-8">
                <h1 class="font-sans font-thin">Contact</h1>
                <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">Please fill the form. I'll reply as soon as possible</h2>
            </div>
            <div class="flex justify-center">
                <div class="w-2/3">
                    <div class="border border-dashed border-very-light p-8">
                        <div class="flex">
                            <div class="w-1/2">
                                <h6 class="text-light mb-5">
                                    Contact Details
                                </h6>
                                <div>
                                    <h5>
                                        Ndifon Desmond 'malico' Yong
                                    </h5>
                                    <h6>
                                        <address>
                                            Bamenda, Cameroon
                                        </address>
                                    </h6>
                                </div>
                                <div class="mt-4">
                                    <div> malico.yong@gmail.com</div>
                                    <div>
                                        +237 676 95 67 03
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <a href="//facebook.com/malico.yong.3" class="mr-1">
                                        <span uk-icon="icon: facebook"></span>
                                    </a>
                                    <a href="//twitter.com/MalicoKlash" class="mx-1">
                                        <span uk-icon="icon: twitter"></span>
                                    </a>
                                    <a href="//github.com/malic0" class="mx-1">
                                        <span uk-icon="icon: github"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <form @submit.prevent="submit">
                                    <div class="uk-margin">
                                        <div class="uk-inline">
                                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                                            <input v-model="form.name" class="uk-input hover:border-primary" type="text" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        <div class="uk-inline">
                                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                            <input v-model="form.email" class="uk-input hover:border-primary" type="email" placeholder="Email" required>
                                        </div>
                                    </div>
                                    <div class="uk-margin">
                                        <div class="uk-inline">
                                            <button class="border hover:text-white hover:border-primary hover:text-primary p-2" type="submit">
                                                Submit
                                                <span uk-icon="icon: arrow-right"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            form: {
                email: "",
                name: "",
                message: ""
            }
        }
    },

    head: function() {
        return {
            title: {
                inner: this.$t('contact.title')
            },
        }
    },

    methods: {
        submit() {
            let url = "/api/contact";

            axios
                .post(url, {
                    ...this.form
                })
                .then(
                    (response) => {
                        self.load = true;
                        self.resetForm();
                    }
                )
        },

        resetForm() {
            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
        }
    }

}

</script>

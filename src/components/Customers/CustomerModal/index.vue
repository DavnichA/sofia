<template>
    <v-dialog v-model="status_customer" persistent scrollable absolute width="550" max-height="98vh">
        <v-card class="scroll-wrap">

            <!-- 👻 Head Modal 👻 -->
            <v-toolbar color="primary" :title="'Customer #'+id" class="sticky-head"/>

            <!-- 👻 Avatar 👻 -->
            <v-card-item>
                <v-row>
                    <v-col class="d-flex justify-center">
                        <v-avatar color="success" size="90" :image="!statusImg ? imgLink : ''">
                            <span style="font-weight: 600" v-if="statusImg">{{initials}}</span>
                        </v-avatar>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Avatar input 👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-file-input v-model="customer.avatar_file"
                            @update:modelValue="fileImgChange()"
                            accept="image/png, image/jpeg, image/bmp"
                            :rules="[rules.avatar]"
                            placeholder="Pick an avatar"
                            prepend-icon="mdi-camera"
                            hide-details
                            label="Photo"
                            variant="underlined"/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 First Name & Last Name 👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-text-field v-model="customer.first_name" label="First Name" type="input" variant="underlined" hide-details/>
                    </v-col>

                    <v-col>
                        <v-text-field v-model="customer.last_name" label="Last Name" type="input" variant="underlined" hide-details/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Phone & Email 👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-text-field v-model="customer.phone" label="Phone" type="number" variant="underlined" hide-details @keypress="numberValue($event, 10)"/>
                    </v-col>

                    <v-col>
                        <v-text-field v-model="customer.email" label="Email" type="email" :rules="[rules.email]" variant="underlined" hide-details/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Date of Birth & Gender 👻 -->
            <v-card-item>
                <v-row>
                    <v-col class="d-flex flex-column">
                        <span style="font-weight: 600">Date of Birth</span>
                        <div class="d-flex">
                            <v-responsive max-width="60" class="mr-4">
                                <v-text-field v-model="customer.birthday.day" label="Day" type="number" variant="underlined" hide-details @keypress="numberValue($event, 2)"/>
                            </v-responsive>

                            <v-responsive max-width="60" class="mr-4">
                                <v-text-field v-model="customer.birthday.mounth" label="Mounth" type="number" variant="underlined" hide-details @keypress="numberValue($event, 2)"/>
                            </v-responsive>
                            
                            <v-responsive max-width="87">
                                <v-text-field v-model="customer.birthday.year" label="Year" type="number" variant="underlined" hide-details @keypress="numberValue($event, 4)"/>
                            </v-responsive>

                        </div>
                    </v-col>

                    <v-col class="d-flex align-end">
                        <v-select v-model="customer.gender"
                            label="Gender"
                            variant="underlined"
                            hide-details
                            :items="['Male', 'Female']">
                        </v-select>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Physical Address 👻 -->
            <v-card-item>
                <v-row class="justify-center">
                    <v-col class="d-flex justify-center">
                        <span style="font-weight: 600">Physical Address</span>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Address 👻 -->
            <v-card-item class="pt-0">
                <v-row>
                    <v-col>
                        <v-text-field v-model="customer.address.address" label="Address" type="input" variant="underlined" hide-details class="flex-grow-1"/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Unit/Apt &  City👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-text-field v-model="customer.address.unit_apt" label="Unit/Apt" type="input" variant="underlined" hide-details/>
                    </v-col>

                    <v-col>
                        <v-text-field v-model="customer.address.city" label="City" type="input" variant="underlined" hide-details/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 State & Zip 👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-text-field v-model="customer.address.state" label="State" type="input" variant="underlined" hide-details/>
                    </v-col>

                    <v-col>
                        <v-text-field v-model="customer.address.zip" label="Zip" type="input" variant="underlined" hide-details/>
                    </v-col>
                </v-row>
            </v-card-item>

            <!-- 👻 Notice 👻 -->
            <v-card-item>
                <v-row>
                    <v-col>
                        <v-textarea v-model="customer.address.notice" label="Notice" variant="outlined" class="pt-2"></v-textarea>
                    </v-col>
                </v-row>
            </v-card-item>

            <v-card-actions class="justify-end sticky-footer" style="margin-top: auto">
                <v-btn variant="flat" color="grey" @click="cancelClick()">Cancel</v-btn>
                <v-btn variant="flat" color="primary" @click="saveOrder()">Save & Close</v-btn>
                <v-btn variant="flat" color="success" @click="saveOrder()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

    export default {
        name: 'CustomerModal',

        data() {
            return {
                rules: {
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    },
                    avatar: value => {
                        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
                    },
                },
                local_img_link: null
            }
        },

        computed: {
            status_customer: {
                get() {return this.$store.state.customer_edit.customer_modal_status},
                set(value) {this.$store.commit('SET_CUSTOMER_MODAL_STATUS', value)}
            },

            id: {
                get() {return this.$store.state.customer_edit.customer_id},
                set(value) {this.$store.commit('SET_CUSTOMER_ID', value)}
            },

            customer: {
                get() {return this.$store.state.customer_edit.customer_data},
                set(value) {this.$store.commit('SET_CUSTOMER_DATA', value)}
            },

            initials() {
                return this.customer.first_name[0]+'.'+this.customer.last_name[0]
            },

            statusImg() {
                if (!this.local_img_link && !this.customer.img) return true
                else return false
            },

            imgLink() {
                if (this.local_img_link) return this.local_img_link
                else return this.customer.img
            },
        },

        methods: {

            cancelClick() {
                this.status_customer = false;
            },

            saveOrder() {
                
            },

            numberValue(e, col) {
                if (e.target.value.length >= col) e.preventDefault()
            },

            fileImgChange() {
                let file = new Blob(this.customer.avatar_file);
                this.local_img_link = URL.createObjectURL(file)
            }
        }
    }
</script>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

</style>

<style scoped>
    .sticky-head {
        inset-block-start: 0;
        position: sticky;
        z-index: 9;
    }

    .sticky-footer {
        inset-block-end: 0;
        position: sticky;
        z-index: 9;
        background-color: #fff;
    }

    .scroll-wrap::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    .scroll-wrap::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .scroll-wrap::-webkit-scrollbar-thumb {
        background: #888;
    }

    .scroll-wrap::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>

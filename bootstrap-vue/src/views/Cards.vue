<template>
    <div class="mt-5">
        <b-button class="mr-2" variant="primary">Primary</b-button>
        <b-button class="mr-2" variant="secondary">Secondary</b-button>
        <b-button class="mr-2" variant="success">Success</b-button>
        <b-button class="mr-2" variant="danger">Danger</b-button>
        <b-button class="mr-2" variant="warning">Warning</b-button>
        <b-button class="mr-2" variant="info">Info</b-button>
        <b-button class="mr-2" variant="light">Light</b-button>
        <b-button class="mr-2" variant="dark">Dark</b-button>
        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card title="Card title" sub-title="Card subtitle">
                    <b-card-text>
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                    </b-card-text>

                    <b-card-text>A second paragraph of text in the card.</b-card-text>

                    <a href="#" class="card-link">Card link</a>
                    <b-link href="#" class="card-link">Another link</b-link>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card title="Card title" sub-title="Card subtitle">
                    <b-card-text>
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                    </b-card-text>

                    <b-card-text>A second paragraph of text in the card.</b-card-text>

                    <a href="#" class="card-link">Card link</a>
                    <b-link href="#" class="card-link">Another link</b-link>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'Cards'
}
</script>

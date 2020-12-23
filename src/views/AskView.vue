<template>
	<div>
		<div v-for="item in askItems">
			<!-- <a v-bind:href="item.url">{{item.title}}</a> -->
			<router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
			<small>{{item.time_ago}} {{item.user}}</small>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["askItems"])
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
	}
};
</script>

<style>
</style>

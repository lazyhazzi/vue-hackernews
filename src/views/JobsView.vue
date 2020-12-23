<template>
	<div>
		<div v-for="item in jobsItems">
			<a v-bind:href="item.url">{{item.title}}</a>
			<small>{{item.time_ago}}</small>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["jobsItems"])
	},
	created() {
		this.$store.dispatch("FETCH_JOBS");
	}
};
</script>

<style>
</style>

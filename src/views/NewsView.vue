<template>
	<div>
		<div v-for="item in newsItems">
			<a v-bind:href="item.url">{{item.title}}</a>
			<small>
				{{item.time_ago}}
				<router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
			</small>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["newsItems"])
	},
	created() {
		this.$store.dispatch("FETCH_NEWS");
	}
};
</script>

<style>
</style>

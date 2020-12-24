<template>
	<div>
		<section>
			<user-profile :info="fetchedItem">
				<router-link :to="`/user/${fetchedItem.user}`" slot="username">{{fetchedItem.user}}</router-link>
				<span slot="time">{{fetchedItem.time_ago}}</span>
			</user-profile>
		</section>
		<section>
			<!-- 질문 상세 정보 -->
			<h2>{{fetchedItem.title}}</h2>
		</section>
		<section>
			<!-- 질문 댓글 -->
			<div v-html="fetchedItem.content"></div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
	components: {
		UserProfile
	},
	computed: {
		...mapGetters(["fetchedItem"])
	},
	created() {
		const itemId = this.$route.params.id;
		this.$store.dispatch("FETCH_ITEM", itemId);
	}
};
</script>

<style scoped>
</style>

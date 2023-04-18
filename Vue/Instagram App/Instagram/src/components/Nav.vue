<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";

import Container from "./Container.vue";
import AuthModal from "./AuthModal.vue";

const router = useRouter();
const searchUsername = ref<String>("");
const isAuthenticated = ref<Boolean>(false);

const onSearch = () => {
	if (searchUsername.value) {
		router.push(`/profile/${searchUsername.value}`);
		searchUsername.value = "";
	}
};
</script>

<template>
	<a-layout-header>
		<Container>
			<div class="nav-container">
				<div class="left-content">
					<RouterLink to="/">Instagram</RouterLink>
					<a-input-search
						v-model:value="searchUsername"
						placeholder="Username..."
						style="width: 200px"
						@search="onSearch"
					/>
				</div>

				<div v-if="isAuthenticated" class="right-content">
					<a-button type="primary">Profile</a-button>
					<a-button type="primary">Logout</a-button>
				</div>
				<div v-else class="right-content">
					<AuthModal :isLogin="false" />
					<AuthModal :isLogin="true" />
				</div>
			</div>
		</Container>
	</a-layout-header>
</template>

<style scoped>
.nav-container {
	display: flex;
	justify-content: space-between;
}

.left-content {
	display: flex;
	align-items: center;
}

.left-content a {
	margin-right: 10px;
}

.right-content {
	display: flex;
	align-items: center;
}

.right-content button {
	margin-left: 10px;
}
</style>

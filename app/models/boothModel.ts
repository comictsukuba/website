import { z } from "zod";

export const BoothParticipantSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("booth"),
		spaceId: z.number().positive()
	}),
	z.object({
		type: z.literal("consignment")
	}),
	z.object({
		type: z.literal("none")
	})
]);

export const BoothCategorySchema = z.discriminatedUnion("id", [
	z.object({
		id: z.literal("01"),
		name: z.literal("二次創作"),
		color: z.literal("#ff69b4")
	}),
	z.object({
		id: z.literal("02"),
		name: z.literal("イラスト、漫画"),
		color: z.literal("#ff4500")
	}),
	z.object({
		id: z.literal("03"),
		name: z.literal("評論、情報、技術"),
		color: z.literal("#1e90ff")
	}),
	z.object({
		id: z.literal("04"),
		name: z.literal("旅、写真、鉄道"),
		color: z.literal("#32cd32")
	}),
	z.object({
		id: z.literal("05"),
		name: z.literal("文芸、歴史"),
		color: z.literal("#8a2be2")
	}),
	z.object({
		id: z.literal("06"),
		name: z.literal("ゲーム"),
		color: z.literal("#ff8c00")
	})
]);

export const boothCategoryIds = BoothCategorySchema.options.map((opt => opt.shape.id.value));
export const BoothCategoryIdSchema = z.enum(boothCategoryIds);

export const BoothLinkSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("x"),
		id: z.string().min(1).max(15)
	}),
	z.object({
		type: z.literal("instagram"),
		id: z.string().min(1).max(30)
	}),
	z.object({
		type: z.literal("url"),
		url: z.url()
	})
]);

export const BoothModelSchema = z.object({
	id: z.string().min(1).max(20),
	name: z.string().min(1).max(50),
	participant: z.object({
		day1: BoothParticipantSchema,
		day2: BoothParticipantSchema
	}),
	profile: z.object({
		card: z.url().optional(),
		description: z.string().max(60).optional(),
		links: z.array(BoothLinkSchema).min(0).max(3),
		categoryIdList: z.array(BoothCategoryIdSchema).min(1).max(3),
	}).optional()
});

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "external_id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_hubs" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "chat_hubs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_hub_messages" (
    "id" TEXT NOT NULL,
    "chat_hub_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "chat_hub_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_hub_participants" (
    "id" TEXT NOT NULL,
    "chat_hub_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "chat_hub_participants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chat_hub_messages_chat_hub_id_key" ON "chat_hub_messages"("chat_hub_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_hub_messages_user_id_key" ON "chat_hub_messages"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_hub_participants_chat_hub_id_key" ON "chat_hub_participants"("chat_hub_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_hub_participants_user_id_key" ON "chat_hub_participants"("user_id");

-- AddForeignKey
ALTER TABLE "chat_hub_messages" ADD CONSTRAINT "chat_hub_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_hub_messages" ADD CONSTRAINT "chat_hub_messages_chat_hub_id_fkey" FOREIGN KEY ("chat_hub_id") REFERENCES "chat_hubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_hub_participants" ADD CONSTRAINT "chat_hub_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_hub_participants" ADD CONSTRAINT "chat_hub_participants_chat_hub_id_fkey" FOREIGN KEY ("chat_hub_id") REFERENCES "chat_hubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { Module } from '@nestjs/common'
import { CharacterModule } from './character/character.module'
import { CultivationModule } from './cultivation/cultivation.module'
import { BattleModule } from './battle/battle.module'
import { InventoryModule } from './inventory/inventory.module'
import { QuestModule } from './quest/quest.module'
import { ShopModule } from './shop/shop.module'
import { AfkCultivationModule } from './afk-cultivation/afk-cultivation.module'
import { CraftingModule } from './crafting/crafting.module'
import { SectorModule } from './sector/sector.module'
import { SocialModule } from './social/social.module'

@Module({
  imports: [
    CharacterModule,
    CultivationModule,
    BattleModule,
    InventoryModule,
    QuestModule,
    ShopModule,
    AfkCultivationModule,
    CraftingModule,
    SectorModule,
    SocialModule
  ]
})
export class AppModule {}

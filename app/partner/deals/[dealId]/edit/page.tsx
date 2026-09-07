import {and,asc,eq} from "drizzle-orm";
import {notFound} from "next/navigation";
import {getDb} from "../../../../../db";
import {dealImages,deals,venues} from "../../../../../db/schema";
import {requireChatGPTUser} from "../../../../chatgpt-auth";
import {DealEditor} from "../../../../components/DealEditor";
import {PortalNav} from "../../../PortalNav";
export const dynamic="force-dynamic";
export default async function EditDealPage({params}:{params:Promise<{dealId:string}>}){const{dealId}=await params,user=await requireChatGPTUser(`/partner/deals/${dealId}/edit`),db=getDb();let deal:typeof deals.$inferSelect|undefined,venueRows:typeof venues.$inferSelect[]=[],images:typeof dealImages.$inferSelect[]=[];try{[deal]=await db.select().from(deals).where(and(eq(deals.dealId,dealId),eq(deals.ownerEmail,user.email))).limit(1);venueRows=await db.select().from(venues).where(eq(venues.ownerEmail,user.email));images=await db.select().from(dealImages).where(and(eq(dealImages.dealId,dealId),eq(dealImages.ownerEmail,user.email))).orderBy(asc(dealImages.sortOrder))}catch{}if(!deal)notFound();return <main className="portal"><PortalNav active="deals" email={user.email} venue={deal.venueName}/><section className="portal-main edit-page"><header><div><p className="kicker green">Mina deals</p><h1>Redigera deal</h1><p>{deal.dealId} · {deal.status==="active"?"Publicerad":deal.status==="paused"?"Pausad":"Utkast"}</p></div></header><DealEditor deal={deal} venues={venueRows} images={images}/></section></main>}

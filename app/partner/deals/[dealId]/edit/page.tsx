import {and,eq} from "drizzle-orm";
import {notFound} from "next/navigation";
import {getDb} from "../../../../../db";
import {deals} from "../../../../../db/schema";
import {requireChatGPTUser} from "../../../../chatgpt-auth";
import {DealEditor} from "../../../../components/DealEditor";
import {PortalNav} from "../../../PortalNav";
export const dynamic="force-dynamic";
export default async function EditDealPage({params}:{params:Promise<{dealId:string}>}){const{dealId}=await params,user=await requireChatGPTUser(`/partner/deals/${dealId}/edit`);let deal:typeof deals.$inferSelect|undefined;try{[deal]=await getDb().select().from(deals).where(and(eq(deals.dealId,dealId),eq(deals.ownerEmail,user.email))).limit(1)}catch{}if(!deal)notFound();return <main className="portal"><PortalNav active="deals" email={user.email} venue={deal.venueName}/><section className="portal-main edit-page"><header><div><p className="kicker green">Mina deals</p><h1>Redigera deal</h1><p>{deal.dealId} · {deal.status==="active"?"Publicerad":deal.status==="paused"?"Pausad":"Utkast"}</p></div></header><DealEditor deal={deal}/></section></main>}

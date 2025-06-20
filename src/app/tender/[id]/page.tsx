import TenderComponent from "@/components/screen/tender/Tender";
import { IPageIdParam, TypeParamId } from "@/interfaces/tender.interface";
import { TenderService } from "@/services/tender.service";


export async function getId(params: TypeParamId) {
    const data = await TenderService.getTender(params.id as number)
    return data
}


export default async function Tender({params}: IPageIdParam) {
  const id  = await params;
  const tender = await getId(id)

  return (
    <>
        <TenderComponent tender={tender}/>
    </>
    
  )
}


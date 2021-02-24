
// Manage dynamic sorting in manual table
const orderSelectorNumberFn = (sort: any, lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
    const l = lf[sort.orderBy] ? lf[sort.orderBy] : 0;
    const r = rg[sort.orderBy] ? rg[sort.orderBy] : 0;

    return sort.orderAsc ? l - r : r - l;
}
const orderSelectorStringFn = (sort: any, lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) => {
    const l: string = sort.orderAsc ? lf[sort.orderBy] : rg[sort.orderBy];
    const r: string = sort.orderAsc ? rg[sort.orderBy] : lf[sort.orderBy];

    if (l < r) {
        return -1;
    }
    if (l > r) {
        return 1;
    }
    return 0;
}

export function orderSelectorFn(sort: any, lf: SkillsNm.ISkillsType, rg: SkillsNm.ISkillsType) {
    const type = typeof (lf[sort.orderBy]);
    return type === 'string' ? orderSelectorStringFn(sort, lf, rg) : orderSelectorNumberFn(sort, lf, rg);
}
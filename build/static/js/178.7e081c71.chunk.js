"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[178,248],{61248:function(e,a,t){t.r(a);var n=t(74165),i=t(15861),s=t(70885),r=t(78983),d=t(72791),u=t(74569),l=t.n(u),c=t(57689),j=t(80184);a.default=function(){var e=(0,d.useState)(""),a=(0,s.Z)(e,2),t=a[0],u=a[1],x=(0,d.useState)(""),h=(0,s.Z)(x,2),k=h[0],o=h[1],f=(0,d.useState)(""),b=(0,s.Z)(f,2),p=b[0],v=b[1],g=(0,d.useState)(""),m=(0,s.Z)(g,2),S=m[0],_=m[1],L=(0,d.useState)(""),Z=(0,s.Z)(L,2),y=Z[0],C=Z[1],I=(0,d.useState)(""),O=(0,s.Z)(I,2),q=O[0],M=O[1],T=(0,d.useState)(""),V=(0,s.Z)(T,2),K=V[0],w=V[1],G=(0,d.useState)(""),J=(0,s.Z)(G,2),D=J[0],A=J[1],P=(0,d.useState)(""),U=(0,s.Z)(P,2),E=U[0],N=U[1],B=(0,d.useState)(""),H=(0,s.Z)(B,2),R=H[0],z=H[1],F=(0,d.useState)(""),Q=(0,s.Z)(F,2),W=Q[0],X=Q[1],Y=(0,d.useState)(""),$=(0,s.Z)(Y,2),ee=$[0],ae=$[1],te=(0,d.useState)(""),ne=(0,s.Z)(te,2),ie=ne[0],se=ne[1],re=(0,d.useState)(""),de=(0,s.Z)(re,2),ue=de[0],le=de[1],ce=(0,c.UO)().id,je=(0,c.s0)();(0,d.useEffect)((function(){xe()}),[]);var xe=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://localhost:5000/reports/".concat(ce));case 2:a=e.sent,console.log(a.data),u(a.data.shift),o(a.data.site),v(a.data.pic),_(a.data.jenis_giat),C(a.data.giat),M(a.data.lokasi),w(a.data.objek),A(a.data.jumlah_kegiatan),N(a.data.temuan),z(a.data.jumlah_temuan),X(a.data.detail_temuan),ae(a.data.tindak_lanjut),se(a.data.kategori_temuan),le(a.data.keterangan);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,l().patch("http://localhost:5000/reports/".concat(ce),{shift:t,site:k,pic:p,jenisGiat:S,giat:y,lokasi:q,objek:K,jumlahKegiatan:D,temuan:E,jumlahTemuan:R,detailTemuan:W,tindakLanjut:ee,kategoriTemuan:ie,keterangan:ue});case 4:je("/fitur/list-report"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return(0,j.jsx)(r.rb,{children:(0,j.jsx)(r.b7,{xs:12,children:(0,j.jsxs)(r.xH,{className:"mb-4",children:[(0,j.jsxs)(r.bn,{children:[(0,j.jsx)("strong",{children:"Update"})," ",(0,j.jsx)("strong",{children:"Security"})," ",(0,j.jsx)("small",{children:"Report"})]}),(0,j.jsxs)(r.sl,{children:[(0,j.jsx)("p",{className:"text-medium-emphasis medium",children:"Edit data dibawah ini !"}),(0,j.jsxs)(r.lx,{validated:!0,onSubmit:he,children:[(0,j.jsxs)(r.rb,{children:[(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"shift",value:t,onChange:function(e){return u(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Shift",required:!0}),(0,j.jsx)(r.L8,{children:"Shift"})]})}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"site",value:k,onChange:function(e){return o(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Site",required:!0}),(0,j.jsx)(r.L8,{children:"Site"})]})}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"pic",value:p,onChange:function(e){return v(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan PIC",required:!0}),(0,j.jsx)(r.L8,{children:"PIC"})]})})]}),(0,j.jsxs)(r.rb,{children:[(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"jenis_giat",value:S,onChange:function(e){return _(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Jenis Giat",required:!0}),(0,j.jsx)(r.L8,{children:"Jenis Giat"})]})}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"giat",placeholder:"Giat",value:y,onChange:function(e){return C(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Giat",required:!0}),(0,j.jsx)(r.L8,{children:"Giat"})]})})]}),(0,j.jsxs)(r.rb,{children:[(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"lokasi",placeholder:"Lokasi",value:q,onChange:function(e){return M(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Lokasi",required:!0}),(0,j.jsx)(r.L8,{children:"Lokasi"})]})}),(0,j.jsx)(r.b7,{children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"objek",placeholder:"Objek",value:K,onChange:function(e){return w(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Objek",required:!0}),(0,j.jsx)(r.L8,{children:"Objek"})]})})]}),(0,j.jsxs)(r.rb,{children:[(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"jumlah_kegiatan",value:D,onChange:function(e){return A(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Jumlah Kegiatan",required:!0}),(0,j.jsx)(r.L8,{children:"Jumlah Kegiatan"})]})}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"temuan",value:E,onChange:function(e){return N(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Temuan",required:!0}),(0,j.jsx)(r.L8,{children:"Temuan"})]})}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"jumlah_temuan",value:R,onChange:function(e){return z(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Jumlah Temuan",required:!0}),(0,j.jsx)(r.L8,{children:"Jumlah Temuan"})]})})]}),(0,j.jsxs)(r.rb,{children:[(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"detail_temuan",value:W,onChange:function(e){return X(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Detail Temuan",required:!0}),(0,j.jsx)(r.L8,{children:"Detail Temuan"})]})}),(0,j.jsx)(r.b7,{children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"tindak_lanjut",value:ee,onChange:function(e){return ae(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Tindak Lanjut",required:!0}),(0,j.jsx)(r.L8,{children:"Tindak Lanjut"})]})})]}),(0,j.jsxs)(r.rb,{children:[(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:4,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.jO,{type:"text",id:"kategori_temuan",value:ie,onChange:function(e){return se(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Kategori Temuan",required:!0}),(0,j.jsx)(r.L8,{children:"Kategori Temuan"})]})}),(0,j.jsx)(r.b7,{xs:8,children:(0,j.jsxs)(r.j3,{children:[(0,j.jsx)(r.PB,{type:"text",id:"keterangan",value:ue,onChange:function(e){return le(e.target.value)},feedbackValid:"Sesuai!",feedbackInvalid:"Masukkan Keterangan (jika tidak ada masukkan TIDAK ADA)",required:!0}),(0,j.jsx)(r.L8,{children:"Keterangan"})]})}),(0,j.jsx)("p",{children:"  "}),(0,j.jsx)(r.b7,{xs:!0,children:(0,j.jsx)(r.u5,{type:"submit",color:"success",shape:"rounded-pill",children:"Update"})})]})]})]})]})})})}}}]);
//# sourceMappingURL=178.7e081c71.chunk.js.map